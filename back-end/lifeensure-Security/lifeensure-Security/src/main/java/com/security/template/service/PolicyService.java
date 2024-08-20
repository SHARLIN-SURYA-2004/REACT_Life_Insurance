package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Policy;
import com.security.template.repo.PolicyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    public Optional<Policy> getPolicyById(int id) {
        return policyRepository.findById(id);
    }

    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    public Policy updatePolicy(int id, Policy policyDetails) {
        return policyRepository.findById(id)
            .map(policy -> {
                policy.setPolicyName(policyDetails.getPolicyName());
                policy.setName(policyDetails.getName());
                policy.setDob(policyDetails.getDob());
                policy.setGender(policyDetails.getGender());
                policy.setBeneficiary(policyDetails.getBeneficiary());
                policy.setMaritalStatus(policyDetails.getMaritalStatus());
                policy.setPhone(policyDetails.getPhone());
                policy.setAddress(policyDetails.getAddress());
                return policyRepository.save(policy);
            })
            .orElse(null);
    }

    public void deletePolicy(int id) {
        policyRepository.deleteById(id);
    }
}
