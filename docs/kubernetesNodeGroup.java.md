# `kubernetesNodeGroup` Submodule <a name="`kubernetesNodeGroup` Submodule" id="@cdktf/provider-upcloud.kubernetesNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesNodeGroup <a name="KubernetesNodeGroup" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group upcloud_kubernetes_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroup;

KubernetesNodeGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .name(java.lang.String)
    .nodeCount(java.lang.Number)
    .plan(java.lang.String)
//  .antiAffinity(java.lang.Boolean)
//  .antiAffinity(IResolvable)
//  .cloudNativePlan(IResolvable)
//  .cloudNativePlan(java.util.List<KubernetesNodeGroupCloudNativePlan>)
//  .customPlan(IResolvable)
//  .customPlan(java.util.List<KubernetesNodeGroupCustomPlan>)
//  .gpuPlan(IResolvable)
//  .gpuPlan(java.util.List<KubernetesNodeGroupGpuPlan>)
//  .kubeletArgs(IResolvable)
//  .kubeletArgs(java.util.List<KubernetesNodeGroupKubeletArgs>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .storageEncryption(java.lang.String)
//  .taint(IResolvable)
//  .taint(java.util.List<KubernetesNodeGroupTaint>)
//  .utilityNetworkAccess(java.lang.Boolean)
//  .utilityNetworkAccess(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | UUID of the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the node group. Needs to be unique within a cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Amount of nodes to provision in the node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | The server plan used for the node group. You can list available plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.antiAffinity">antiAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, nodes in this group will be placed on separate compute hosts. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.cloudNativePlan">cloudNativePlan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>></code> | cloud_native_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.customPlan">customPlan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>></code> | custom_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.gpuPlan">gpuPlan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>></code> | gpu_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.kubeletArgs">kubeletArgs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>></code> | kubelet_args block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the node_group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | You can optionally select SSH keys to be added as authorized keys to the nodes in this node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.storageEncryption">storageEncryption</a></code> | <code>java.lang.String</code> | The storage encryption strategy to use for the nodes in this group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.taint">taint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>></code> | taint block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.utilityNetworkAccess">utilityNetworkAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to false, nodes in this group will not have access to utility network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

UUID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#cluster KubernetesNodeGroup#cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the node group. Needs to be unique within a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#name KubernetesNodeGroup#name}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Amount of nodes to provision in the node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#node_count KubernetesNodeGroup#node_count}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

The server plan used for the node group. You can list available plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#plan KubernetesNodeGroup#plan}

---

##### `antiAffinity`<sup>Optional</sup> <a name="antiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.antiAffinity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, nodes in this group will be placed on separate compute hosts.

Please note that anti-affinity policy is considered 'best effort' and enabling it does not fully guarantee that the nodes will end up on different hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#anti_affinity KubernetesNodeGroup#anti_affinity}

---

##### `cloudNativePlan`<sup>Optional</sup> <a name="cloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.cloudNativePlan"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>>

cloud_native_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#cloud_native_plan KubernetesNodeGroup#cloud_native_plan}

---

##### `customPlan`<sup>Optional</sup> <a name="customPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.customPlan"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>>

custom_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#custom_plan KubernetesNodeGroup#custom_plan}

---

##### `gpuPlan`<sup>Optional</sup> <a name="gpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.gpuPlan"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>>

gpu_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#gpu_plan KubernetesNodeGroup#gpu_plan}

---

##### `kubeletArgs`<sup>Optional</sup> <a name="kubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.kubeletArgs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>>

kubelet_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#kubelet_args KubernetesNodeGroup#kubelet_args}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the node_group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#labels KubernetesNodeGroup#labels}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.sshKeys"></a>

- *Type:* java.util.List<java.lang.String>

You can optionally select SSH keys to be added as authorized keys to the nodes in this node group.

This allows you to connect to the nodes via SSH once they are running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#ssh_keys KubernetesNodeGroup#ssh_keys}

---

##### `storageEncryption`<sup>Optional</sup> <a name="storageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.storageEncryption"></a>

- *Type:* java.lang.String

The storage encryption strategy to use for the nodes in this group.

If not set, the cluster's storage encryption strategy will be used, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_encryption KubernetesNodeGroup#storage_encryption}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.taint"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>>

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#taint KubernetesNodeGroup#taint}

---

##### `utilityNetworkAccess`<sup>Optional</sup> <a name="utilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.utilityNetworkAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to false, nodes in this group will not have access to utility network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#utility_network_access KubernetesNodeGroup#utility_network_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCloudNativePlan">putCloudNativePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan">putCustomPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putGpuPlan">putGpuPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs">putKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity">resetAntiAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCloudNativePlan">resetCloudNativePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCustomPlan">resetCustomPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetGpuPlan">resetGpuPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs">resetKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetStorageEncryption">resetStorageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint">resetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess">resetUtilityNetworkAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudNativePlan` <a name="putCloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCloudNativePlan"></a>

```java
public void putCloudNativePlan(IResolvable OR java.util.List<KubernetesNodeGroupCloudNativePlan> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCloudNativePlan.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>>

---

##### `putCustomPlan` <a name="putCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan"></a>

```java
public void putCustomPlan(IResolvable OR java.util.List<KubernetesNodeGroupCustomPlan> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putCustomPlan.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>>

---

##### `putGpuPlan` <a name="putGpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putGpuPlan"></a>

```java
public void putGpuPlan(IResolvable OR java.util.List<KubernetesNodeGroupGpuPlan> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putGpuPlan.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>>

---

##### `putKubeletArgs` <a name="putKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs"></a>

```java
public void putKubeletArgs(IResolvable OR java.util.List<KubernetesNodeGroupKubeletArgs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>>

---

##### `putTaint` <a name="putTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint"></a>

```java
public void putTaint(IResolvable OR java.util.List<KubernetesNodeGroupTaint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>>

---

##### `resetAntiAffinity` <a name="resetAntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity"></a>

```java
public void resetAntiAffinity()
```

##### `resetCloudNativePlan` <a name="resetCloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCloudNativePlan"></a>

```java
public void resetCloudNativePlan()
```

##### `resetCustomPlan` <a name="resetCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetCustomPlan"></a>

```java
public void resetCustomPlan()
```

##### `resetGpuPlan` <a name="resetGpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetGpuPlan"></a>

```java
public void resetGpuPlan()
```

##### `resetKubeletArgs` <a name="resetKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs"></a>

```java
public void resetKubeletArgs()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetStorageEncryption` <a name="resetStorageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetStorageEncryption"></a>

```java
public void resetStorageEncryption()
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint"></a>

```java
public void resetTaint()
```

##### `resetUtilityNetworkAccess` <a name="resetUtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess"></a>

```java
public void resetUtilityNetworkAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroup;

KubernetesNodeGroup.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroup;

KubernetesNodeGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroup;

KubernetesNodeGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroup;

KubernetesNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlan">cloudNativePlan</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList">KubernetesNodeGroupCloudNativePlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlan">customPlan</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList">KubernetesNodeGroupCustomPlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlan">gpuPlan</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList">KubernetesNodeGroupGpuPlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs">kubeletArgs</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput">antiAffinityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlanInput">cloudNativePlanInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlanInput">customPlanInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlanInput">gpuPlanInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput">kubeletArgsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryptionInput">storageEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput">taintInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput">utilityNetworkAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity">antiAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryption">storageEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess">utilityNetworkAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudNativePlan`<sup>Required</sup> <a name="cloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlan"></a>

```java
public KubernetesNodeGroupCloudNativePlanList getCloudNativePlan();
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList">KubernetesNodeGroupCloudNativePlanList</a>

---

##### `customPlan`<sup>Required</sup> <a name="customPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlan"></a>

```java
public KubernetesNodeGroupCustomPlanList getCustomPlan();
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList">KubernetesNodeGroupCustomPlanList</a>

---

##### `gpuPlan`<sup>Required</sup> <a name="gpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlan"></a>

```java
public KubernetesNodeGroupGpuPlanList getGpuPlan();
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList">KubernetesNodeGroupGpuPlanList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubeletArgs`<sup>Required</sup> <a name="kubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs"></a>

```java
public KubernetesNodeGroupKubeletArgsList getKubeletArgs();
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint"></a>

```java
public KubernetesNodeGroupTaintList getTaint();
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a>

---

##### `antiAffinityInput`<sup>Optional</sup> <a name="antiAffinityInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput"></a>

```java
public java.lang.Object getAntiAffinityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudNativePlanInput`<sup>Optional</sup> <a name="cloudNativePlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cloudNativePlanInput"></a>

```java
public java.lang.Object getCloudNativePlanInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `customPlanInput`<sup>Optional</sup> <a name="customPlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.customPlanInput"></a>

```java
public java.lang.Object getCustomPlanInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>>

---

##### `gpuPlanInput`<sup>Optional</sup> <a name="gpuPlanInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.gpuPlanInput"></a>

```java
public java.lang.Object getGpuPlanInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>>

---

##### `kubeletArgsInput`<sup>Optional</sup> <a name="kubeletArgsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput"></a>

```java
public java.lang.Object getKubeletArgsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageEncryptionInput`<sup>Optional</sup> <a name="storageEncryptionInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryptionInput"></a>

```java
public java.lang.String getStorageEncryptionInput();
```

- *Type:* java.lang.String

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput"></a>

```java
public java.lang.Object getTaintInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>>

---

##### `utilityNetworkAccessInput`<sup>Optional</sup> <a name="utilityNetworkAccessInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput"></a>

```java
public java.lang.Object getUtilityNetworkAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `antiAffinity`<sup>Required</sup> <a name="antiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity"></a>

```java
public java.lang.Object getAntiAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageEncryption`<sup>Required</sup> <a name="storageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.storageEncryption"></a>

```java
public java.lang.String getStorageEncryption();
```

- *Type:* java.lang.String

---

##### `utilityNetworkAccess`<sup>Required</sup> <a name="utilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess"></a>

```java
public java.lang.Object getUtilityNetworkAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesNodeGroupCloudNativePlan <a name="KubernetesNodeGroupCloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupCloudNativePlan;

KubernetesNodeGroupCloudNativePlan.builder()
//  .storageSize(java.lang.Number)
//  .storageTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | The size of the storage device in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | The storage tier to use. |

---

##### `storageSize`<sup>Optional</sup> <a name="storageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

The size of the storage device in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}

---

### KubernetesNodeGroupConfig <a name="KubernetesNodeGroupConfig" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupConfig;

KubernetesNodeGroupConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .name(java.lang.String)
    .nodeCount(java.lang.Number)
    .plan(java.lang.String)
//  .antiAffinity(java.lang.Boolean)
//  .antiAffinity(IResolvable)
//  .cloudNativePlan(IResolvable)
//  .cloudNativePlan(java.util.List<KubernetesNodeGroupCloudNativePlan>)
//  .customPlan(IResolvable)
//  .customPlan(java.util.List<KubernetesNodeGroupCustomPlan>)
//  .gpuPlan(IResolvable)
//  .gpuPlan(java.util.List<KubernetesNodeGroupGpuPlan>)
//  .kubeletArgs(IResolvable)
//  .kubeletArgs(java.util.List<KubernetesNodeGroupKubeletArgs>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .storageEncryption(java.lang.String)
//  .taint(IResolvable)
//  .taint(java.util.List<KubernetesNodeGroupTaint>)
//  .utilityNetworkAccess(java.lang.Boolean)
//  .utilityNetworkAccess(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | UUID of the cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the node group. Needs to be unique within a cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Amount of nodes to provision in the node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | The server plan used for the node group. You can list available plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity">antiAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, nodes in this group will be placed on separate compute hosts. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cloudNativePlan">cloudNativePlan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>></code> | cloud_native_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.customPlan">customPlan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>></code> | custom_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.gpuPlan">gpuPlan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>></code> | gpu_plan block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs">kubeletArgs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>></code> | kubelet_args block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the node_group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | You can optionally select SSH keys to be added as authorized keys to the nodes in this node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.storageEncryption">storageEncryption</a></code> | <code>java.lang.String</code> | The storage encryption strategy to use for the nodes in this group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint">taint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>></code> | taint block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess">utilityNetworkAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to false, nodes in this group will not have access to utility network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

UUID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#cluster KubernetesNodeGroup#cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the node group. Needs to be unique within a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#name KubernetesNodeGroup#name}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Amount of nodes to provision in the node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#node_count KubernetesNodeGroup#node_count}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

The server plan used for the node group. You can list available plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#plan KubernetesNodeGroup#plan}

---

##### `antiAffinity`<sup>Optional</sup> <a name="antiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity"></a>

```java
public java.lang.Object getAntiAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, nodes in this group will be placed on separate compute hosts.

Please note that anti-affinity policy is considered 'best effort' and enabling it does not fully guarantee that the nodes will end up on different hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#anti_affinity KubernetesNodeGroup#anti_affinity}

---

##### `cloudNativePlan`<sup>Optional</sup> <a name="cloudNativePlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cloudNativePlan"></a>

```java
public java.lang.Object getCloudNativePlan();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>>

cloud_native_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#cloud_native_plan KubernetesNodeGroup#cloud_native_plan}

---

##### `customPlan`<sup>Optional</sup> <a name="customPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.customPlan"></a>

```java
public java.lang.Object getCustomPlan();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>>

custom_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#custom_plan KubernetesNodeGroup#custom_plan}

---

##### `gpuPlan`<sup>Optional</sup> <a name="gpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.gpuPlan"></a>

```java
public java.lang.Object getGpuPlan();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>>

gpu_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#gpu_plan KubernetesNodeGroup#gpu_plan}

---

##### `kubeletArgs`<sup>Optional</sup> <a name="kubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs"></a>

```java
public java.lang.Object getKubeletArgs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>>

kubelet_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#kubelet_args KubernetesNodeGroup#kubelet_args}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the node_group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#labels KubernetesNodeGroup#labels}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

You can optionally select SSH keys to be added as authorized keys to the nodes in this node group.

This allows you to connect to the nodes via SSH once they are running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#ssh_keys KubernetesNodeGroup#ssh_keys}

---

##### `storageEncryption`<sup>Optional</sup> <a name="storageEncryption" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.storageEncryption"></a>

```java
public java.lang.String getStorageEncryption();
```

- *Type:* java.lang.String

The storage encryption strategy to use for the nodes in this group.

If not set, the cluster's storage encryption strategy will be used, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_encryption KubernetesNodeGroup#storage_encryption}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint"></a>

```java
public java.lang.Object getTaint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>>

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#taint KubernetesNodeGroup#taint}

---

##### `utilityNetworkAccess`<sup>Optional</sup> <a name="utilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess"></a>

```java
public java.lang.Object getUtilityNetworkAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to false, nodes in this group will not have access to utility network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#utility_network_access KubernetesNodeGroup#utility_network_access}

---

### KubernetesNodeGroupCustomPlan <a name="KubernetesNodeGroupCustomPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupCustomPlan;

KubernetesNodeGroupCustomPlan.builder()
    .cores(java.lang.Number)
    .memory(java.lang.Number)
    .storageSize(java.lang.Number)
//  .storageTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.cores">cores</a></code> | <code>java.lang.Number</code> | The number of CPU cores dedicated to individual node group nodes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.memory">memory</a></code> | <code>java.lang.Number</code> | The amount of memory in megabytes to assign to individual node group node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | The size of the storage device in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | The storage tier to use. |

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

The number of CPU cores dedicated to individual node group nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#cores KubernetesNodeGroup#cores}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

The amount of memory in megabytes to assign to individual node group node.

Value needs to be divisible by 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#memory KubernetesNodeGroup#memory}

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

The size of the storage device in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}

---

### KubernetesNodeGroupGpuPlan <a name="KubernetesNodeGroupGpuPlan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupGpuPlan;

KubernetesNodeGroupGpuPlan.builder()
//  .storageSize(java.lang.Number)
//  .storageTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | The size of the storage device in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | The storage tier to use. |

---

##### `storageSize`<sup>Optional</sup> <a name="storageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

The size of the storage device in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_size KubernetesNodeGroup#storage_size}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#storage_tier KubernetesNodeGroup#storage_tier}

---

### KubernetesNodeGroupKubeletArgs <a name="KubernetesNodeGroupKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupKubeletArgs;

KubernetesNodeGroupKubeletArgs.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key">key</a></code> | <code>java.lang.String</code> | Kubelet argument key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value">value</a></code> | <code>java.lang.String</code> | Kubelet argument value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Kubelet argument key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Kubelet argument value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

### KubernetesNodeGroupTaint <a name="KubernetesNodeGroupTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupTaint;

KubernetesNodeGroupTaint.builder()
    .effect(java.lang.String)
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect">effect</a></code> | <code>java.lang.String</code> | Taint effect. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key">key</a></code> | <code>java.lang.String</code> | Taint key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value">value</a></code> | <code>java.lang.String</code> | Taint value. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Taint effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#effect KubernetesNodeGroup#effect}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Taint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Taint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.24.0/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesNodeGroupCloudNativePlanList <a name="KubernetesNodeGroupCloudNativePlanList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupCloudNativePlanList;

new KubernetesNodeGroupCloudNativePlanList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.get"></a>

```java
public KubernetesNodeGroupCloudNativePlanOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>>

---


### KubernetesNodeGroupCloudNativePlanOutputReference <a name="KubernetesNodeGroupCloudNativePlanOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupCloudNativePlanOutputReference;

new KubernetesNodeGroupCloudNativePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageSize">resetStorageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageTier">resetStorageTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageSize` <a name="resetStorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageSize"></a>

```java
public void resetStorageSize()
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.resetStorageTier"></a>

```java
public void resetStorageTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSizeInput">storageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageSizeInput`<sup>Optional</sup> <a name="storageSizeInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSizeInput"></a>

```java
public java.lang.Number getStorageSizeInput();
```

- *Type:* java.lang.Number

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlanOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCloudNativePlan">KubernetesNodeGroupCloudNativePlan</a>

---


### KubernetesNodeGroupCustomPlanList <a name="KubernetesNodeGroupCustomPlanList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupCustomPlanList;

new KubernetesNodeGroupCustomPlanList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get"></a>

```java
public KubernetesNodeGroupCustomPlanOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>>

---


### KubernetesNodeGroupCustomPlanOutputReference <a name="KubernetesNodeGroupCustomPlanOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupCustomPlanOutputReference;

new KubernetesNodeGroupCustomPlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resetStorageTier">resetStorageTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.resetStorageTier"></a>

```java
public void resetStorageTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.coresInput">coresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSizeInput">storageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.cores">cores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.coresInput"></a>

```java
public java.lang.Number getCoresInput();
```

- *Type:* java.lang.Number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `storageSizeInput`<sup>Optional</sup> <a name="storageSizeInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSizeInput"></a>

```java
public java.lang.Number getStorageSizeInput();
```

- *Type:* java.lang.Number

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlanOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupCustomPlan">KubernetesNodeGroupCustomPlan</a>

---


### KubernetesNodeGroupGpuPlanList <a name="KubernetesNodeGroupGpuPlanList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupGpuPlanList;

new KubernetesNodeGroupGpuPlanList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.get"></a>

```java
public KubernetesNodeGroupGpuPlanOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>>

---


### KubernetesNodeGroupGpuPlanOutputReference <a name="KubernetesNodeGroupGpuPlanOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupGpuPlanOutputReference;

new KubernetesNodeGroupGpuPlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageSize">resetStorageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageTier">resetStorageTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageSize` <a name="resetStorageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageSize"></a>

```java
public void resetStorageSize()
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.resetStorageTier"></a>

```java
public void resetStorageTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSizeInput">storageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageSizeInput`<sup>Optional</sup> <a name="storageSizeInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSizeInput"></a>

```java
public java.lang.Number getStorageSizeInput();
```

- *Type:* java.lang.Number

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlanOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupGpuPlan">KubernetesNodeGroupGpuPlan</a>

---


### KubernetesNodeGroupKubeletArgsList <a name="KubernetesNodeGroupKubeletArgsList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupKubeletArgsList;

new KubernetesNodeGroupKubeletArgsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get"></a>

```java
public KubernetesNodeGroupKubeletArgsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>>

---


### KubernetesNodeGroupKubeletArgsOutputReference <a name="KubernetesNodeGroupKubeletArgsOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupKubeletArgsOutputReference;

new KubernetesNodeGroupKubeletArgsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>

---


### KubernetesNodeGroupTaintList <a name="KubernetesNodeGroupTaintList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupTaintList;

new KubernetesNodeGroupTaintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get"></a>

```java
public KubernetesNodeGroupTaintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>>

---


### KubernetesNodeGroupTaintOutputReference <a name="KubernetesNodeGroupTaintOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.kubernetes_node_group.KubernetesNodeGroupTaintOutputReference;

new KubernetesNodeGroupTaintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>

---



